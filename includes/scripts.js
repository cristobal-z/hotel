// register.html
$('#card_usuario').load('tablas/tabla_card_usuario.php');

function DatosUsuario(){
    var R_Nom = document.getElementById("R_Nom").value;
    var R_Ape = document.getElementById("R_Ape").value;
    var R_Correo = document.getElementById("R_Correo").value;
    var R_Contra = document.getElementById("R_Contra").value;
    var R_ComContra = document.getElementById("R_ComContra").value;
    var R_NomHotel = document.getElementById("R_NomHotel").value;
    var R_DirHotel = document.getElementById("R_DirHotel").value;

    if(R_Nom == ""){alertify.alert("Agrege su nombre :)");}
    if(R_Ape == ""){alertify.alert("Agrege su apellidos :)");}
    if(R_Correo == ""){alertify.alert("Agrege su correo :)");}
    if(R_Contra == ""){alertify.alert("Agrege una contraseña :)");}
    if(R_ComContra == ""){alertify.alert("Comfirmar la contraseña :)");}
    if(R_NomHotel == ""){alertify.alert("Agrege el nombre del hotel :)");}
    if(R_DirHotel == ""){alertify.alert("Agrege la direccion :)");}

    if(!R_Nom == "" && !R_Ape == "" && !R_Correo == "" && !R_Contra == "" && !R_ComContra == "" && !R_NomHotel == "" && !R_DirHotel == ""){
        //alertify.alert("Hola");
        //vald}idar contraseñas
        if(R_Contra == R_ComContra){
            

            var datos = $('#form_card_usuario').serialize();
            $.ajax({
                type:"POST",
                url: "includes/funciones.php",
                data:datos,
                success: function(r){
                    alert(r);
                    if (r == 1) {
                       // $('#tabla_monta').load('tablas/tabla_monta.php');
                        alertify.success("Actualizado con exito!");
                    }else{
                        alertify.error("Erorr");
                    }
    
    
                }
            })

        } // validar contraseñas
        else{
            alertify.alert("Las contraseñas no coinciden");
        }
    } // campos no vacios
}

function ocultar(){
   
    $('#card_hotel').load('tablas/tabla_crear_hotel.php');
    var datos = $('#form_hotel').serialize();
    alert(datos);


    
}

