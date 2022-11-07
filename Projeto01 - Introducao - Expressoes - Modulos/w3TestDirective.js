app.directive("w3TestDirective", function() {
  
  return {
    template : "<h1>Minha Diretiva personalizada</h1>"
  };
  
});



 //Ao adicionar uma restrictpropriedade com o valor "A", a diretiva só pode ser invocada por atributos:

// https://www.w3schools.com/angular/angular_directives.asp