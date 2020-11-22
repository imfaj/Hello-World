
    <!-- JavaScript-->
    <!--- Para que el video de youtube dentro del modal se cpause al cerrar el modal---> 
    <script>
      $(document).ready(function() {
        $('#modalYT').on('hidden.bs.modal', function() {
          var $this = $(this).find('iframe'),
            tempSrc = $this.attr('src');
          $this.attr('src', "");
          $this.attr('src', tempSrc);
        });
      });
    </script>