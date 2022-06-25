 $(document).ready(function()
 {
     let edit =  false;
    $('#task-result').hide();
    fetcTaskData();
  $('#search').keyup(function()
  {
  
    if($('#search').val())
    {
        let search = $('#search').val();
        $.ajax({
         url: 'task-search.php',
         type: 'POST',
         data: {search},
         success: function(response)
         {
            let tasks = JSON.parse(response);
            let template = '';
            tasks.forEach(task => {
              template += `<li>
              ${task.name}
              </li>`
            });
            $('#container').html(template);
            $('#task-result').show();
         }
        });
       }
    });


//Save data 

$('#task-form').submit(function(e){

const postData = {
    name: $('#name').val(),
    description: $('#description').val(),
    id: $('#taskId').val()
};

 if($('#name').val() == "" ||  $('#description').val() == "")
 {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!'
 });
 }
 else
 {

 
let url  =  edit === false ? 'task-save.php' : 'task-edit.php';
console.log(url)

$.post(url,postData,function(response) {
  

  fetcTaskData();
$('#task-form').trigger('reset');
 
});

Swal.fire(
  'Good job!',
  'You clicked the button!',
  'success'
);


 }

e.preventDefault();

});



//mostrar

function fetcTaskData()
{


  $.ajax({

    url: 'task-list.php',
    type: 'GET',
    success: function(response){
  
  
    let task = JSON.parse(response);
    let template = ''
     
      task.forEach(task =>{
  
        template += `
           <tr taskId=${task.id}>
  
           <td>${task.id}</td>
           <td>
           <a href="#" class="task-item">${task.name}</a>
           </td>
           <td>${task.description}</td>
           <td>${task.Date}</td>
           <td>
           <button class="task-delete btn btn-danger">
           
           Delete
           </button>

           </td>
  
  
          </tr>
  
        
        
        
        `;
      
  
      });
  
      $('#tasks').html(template);
  
    }
  
  
  
  });
  
  








}



$(document).on('click','.task-delete',function(){


  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {

  
    if (result.isConfirmed) {
      let element  = $(this)[0].parentElement.parentElement;
      let id = $(element).attr('taskId')
      $.post('task-delete.php',{id}, function(response){
        fetcTaskData();
      });
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
  

});









//update

$(document).on('click','.task-item', function(){


   let element = $(this)[0].parentElement.parentElement;
   let id = $(element).attr('taskId');
   $.post('task-single.php',{id}, function(response){
    const task = JSON.parse(response);
    $('#name').val(task.name);
    $('#description').val(task.description);
    $('#taskId').val(task.id);
    console.log(response);
    edit = true;
  

   })





});



 });