function iniciarConversa() {
    var phone = document.getElementById('phone').value;
    
    // Verificar se os campos estão preenchidos
    if (phone) {
      // Construir o link do WhatsApp
      var whatsappLink = 'https://api.whatsapp.com/send?phone=' + phone;

      
      // Abre o link do WhatsApp em uma nova aba
        window.open(whatsappLink, '_blank');
    } else {
      alert('Por favor, preencha os campos Obrigatório!');
    }
  }



