var flag1=true;
var flag2=true;
var flag3=true;

const instance = axios.create(
    {
        baseURL : 'https://bty-website.firebaseio.com/'
    });

$('.details').hide();

$('#btn-find').on('click',function()
{
    $('#find-more').toggle(700);
});

$('#al').on('click',function()
{
    $('#alex-det').toggle(700);
});

$('#ew').on('click',function()
{
    $('#energy-det').toggle(700);
});

$('#mdmed').on('click',function()
{
    $('#med-det').toggle(700);
});

function hd()
{
    $('#healing-details').toggle(800);
    if(flag1==true)
    {
        $('.h-btn').text('Show less..');
        flag1=false;
    }    
    else
    {
        $('.h-btn').text('Read more..');
        flag1=true;
    }
}
function sd()
{
    $('#supportive-details').toggle(800);
    if(flag2==true)
    {
        $('.s-btn').text('Show less..');
        flag2=false;
    }    
    else
    {
        $('.s-btn').text('Read more..');
        flag2=true;
    }  
}
function ed()
{
    $('#ethical-details').toggle(800);
    if(flag3==true)
    {
        $('.e-btn').text('Show less..');
        flag3=false;
    }    
    else
    {
        $('.e-btn').text('Read more..');
        flag3=true;
    }   
}

$('#retreats-btn').on('click',function()
{
    $('#retreats-details').toggle(800);
    
    if($(this).text()=='READ MORE')
    {
        $(this).text('SHOW LESS');
    }
    else
    {
        $(this).text('READ MORE');
    }
})

$('#g-p').on('click',function()
{
    $('#gp').toggle(700);
});

$('#show-events').on('click', function()
{
    $('#event-list').toggle(700);
});

$('#question-btn').on('click',function()
{
    $('#q-ans').toggle(700);
});

$('.submit-btn').on('click',function()
{
    if($('#user').val()==''|| $('#email').val()==''|| $('#msg').val()=='')
    {
        Swal.fire({
            title :'Field(s) are empty !',
            type :'info',
            position:'center',
            
            
        });
    }
    else
    {
    
        let name = $('#user').val();
        let email = $('#email').val();
        let msg = $('#msg').val();

        var data = {
            userName : name,
            userEmail : email,
            userMsg : msg,

        }

        instance.post('/feedback.json',data)
        .then( (response) => {
            console.log(response);
            Swal.fire({
                title :'Your message has been submitted !',
                type :'success',
            });
            
            $('#user').val('');
            $('#email').val('');
            $('#msg').val('');
        })

        .catch( (error) => {
            console.log(error);
            Swal.fire({
                type : 'error',
                title : 'Can\'t submit your response right now !'
            })
        });
          
    }
});


$(window).on('scroll' , () =>
{
    if (window.scrollY > 120)
        $('.navbar').css({ 
            'opacity' : 0.9,
            'box-shadow' : '2px 2px 8px #888888',
        });
    else
        $('.navbar').css({ 
            opacity : 1
        });

});

$('#user').on('focusout', ()=>
{
    if($('#user').val() == '')
        {
            $('#user').css({
                border : '2px solid #fa594d',
                opacity : '0.9'
            });
        }
    else
    {
        $('#user').css({
            border : 'none',
            opacity : '1.0'
        });
    }    
});

$('#email').on('focusout', ()=>
{
    if($('#email').val() == '')
        {
            $('#email').css({
                border : '2px solid #fa594d',
                opacity : '0.9'
            });
        }
    else
    {
        $('#email').css({
            border : 'none',
            opacity : '1.0'
        });
    }    
});

$('#msg').on('focusout', ()=>
{
    if($('#msg').val() == '')
        {
            $('#msg').css({
                border : '2px solid #fa594d',
                opacity : '0.9'
            });
        }
    else
    {
        $('#msg').css({
            border : 'none',
            opacity : '1.0'

        });
    }    
});

// var myData;
// function getdata() 
// {
//     console.log('getdata is called');
//     instance.get('feedback.json')
//     .then( (response)=>    
//     {
//         console.log(response.data);
//         myData = response.data;
//         console.log(myData.userName);
//     })

    
// }

// var child = {
    
//         age : 6,
//         school : 'Happy Palace',
//         mobile : 'LG stylo 3',
//         toys : true,
//         DOB : '29-Aug-2012'
    
    

// }

// function showdata()
// {
//    const newData =  myData.map( (person) => 
//     {
//         return person.userEmail;
//     })

//     $('.my-data').html(`<h2>${newData}</h2>`)
// }
