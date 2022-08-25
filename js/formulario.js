
   const $form = document.querySelector('#form')

   $form.addEventListener ('submit' , cargadatos)
   
   async function cargadatos (event) {
       event.preventDefault()
       const form = new FormData (this)
       const response = await fetch(this.action, {
           method: this.method,
           body: form,
           headers: {
               'Accept': 'application/json'
           }
       })
       if (response.ok) {
           this.reset()

           Swal.fire('Tu formulario fue enviado con exito. Responderemos a tu correo a la brevedad')
       }
        
   }