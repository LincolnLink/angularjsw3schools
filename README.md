# angularjsw3schools


# Introdução 

- AngularJS é uma estrutura JavaScript . Ele pode ser adicionado a uma página HTML com uma tag < script>.

- AngularJS estende atributos HTML com Diretivas e vincula dados a HTML com Expressões .

- Apenas coloque a tag JS para ele comecar a funcionar

<blockquote>

		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

</blockquote>

- ng-directives

- A diretiva ng-app define um aplicativo AngularJS. (define o app)

- A diretiva ng-model vincula o valor dos controles HTML (input, select, textarea) aos dados do aplicativo. (faz a leitura de dados de entrada)

- A diretiva ng-bind vincula os dados do aplicativo à visualização HTML.
(exibe dados, criando uma saida)

<blockquote>

		<!DOCTYPE html>
		<html>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
		<body>

		<div ng-app="">
		  <p>Name: <input type="text" ng-model="name"></p>
		  <p ng-bind="name"></p>
		</div>

		</body>
		</html>

</blockquote>

- Interpolacao/Expressões 

- As expressões AngularJS são escritas entre chaves duplas: {{ expressão }} .

- O AngularJS "exibirá" os dados exatamente onde a expressão está escrita:

<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body>

	<div ng-app="">
	  <p>My first expression: {{ 5 + 5 }}</p>
	</div>

	</body>
	</html>

</blockquote>

- As expressões AngularJS vinculam dados AngularJS a HTML da mesma maneira que a diretiva ng-bind .

<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body>

	<div ng-app="">
	  <p>Name: <input type="text" ng-model="name"></p>
	  <p>{{name}}</p>
	</div>

	</body>
	</html>

</blockquote>

- Os módulos AngularJS definem aplicativos AngularJS.

- Os controladores AngularJS controlam os aplicativos AngularJS.

- A diretiva ng-app define o aplicativo, a diretiva ng-controller define o controlador.

<blockquote>

	<div ng-app="myApp" ng-controller="myCtrl">

	First Name: <input type="text" ng-model="firstName"><br>
	Last Name: <input type="text" ng-model="lastName"><br>
	<br>
	Full Name: {{firstName + " " + lastName}}

	</div>

	<script>
	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
	  $scope.firstName= "John";
	  $scope.lastName= "Doe";
	});
	</script>

</blockquote>


# Expressões AngularJS

- Expressões AngularJS podem ser escritas dentro de chaves duplas: .{{ expression }}

- Expressões AngularJS também podem ser escritas dentro de uma diretiva: .ng-bind="expression"

- O AngularJS resolverá a expressão e retornará o resultado exatamente onde a expressão foi escrita.

- As expressões AngularJS são muito parecidas com as expressões JavaScript: elas podem conter literais, operadores e variáveis.

Exemplo {{ 5 + 5 }} ou {{ firstName + " " + lastName }}


<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body>

	<div ng-app="">
	  <p>My first expression: {{ 5 + 5 }}</p>
	</div>

	<div ng-app="" ng-init="quantity=1;cost=5">

	<p>Total in dollar: <span ng-bind="quantity * cost"></span></p>

	</div>

	<div ng-app="" ng-init="firstName='John';lastName='Doe'">

	<p>The name is {{ firstName + " " + lastName }}</p>

	<div ng-app="" ng-init="person={firstName:'John',lastName:'Doe'}">

	<p>The name is {{ person.lastName }}</p>


	</body>
	</html>

</blockquote>

# Módulos AngularJS

- Um módulo AngularJS define um aplicativo.

- O módulo é um contêiner para as diferentes partes de um aplicativo.

- O módulo é um contêiner para os controladores de aplicativos.

- Os controladores sempre pertencem a um módulo.

<blockquote>

	<div ng-app="myApp">...</div>

	<script>

	var app = angular.module("myApp", []);

	</script>

</blockquote>


- O parâmetro "myApp" refere-se a um elemento HTML no qual o aplicativo será executado.

- Agora você pode adicionar controladores, diretivas, filtros e muito mais ao seu aplicativo AngularJS.

### Adicionando um Controlador

- Adicione um controlador ao seu aplicativo e consulte o controlador com a ng-controllerdiretiva:

<blockquote>

	<div ng-app="myApp" ng-controller="myCtrl">
	{{ firstName + " " + lastName }}
	</div>

	<script>

	var app = angular.module("myApp", []);

	app.controller("myCtrl", function($scope) {
	  $scope.firstName = "John";
	  $scope.lastName = "Doe";
	});

	</script>

</blockquote>

### Adicionando uma Diretiva

- O AngularJS possui um conjunto de diretivas internas que você pode usar para adicionar funcionalidade ao seu aplicativo.

- Para uma referência completa, visite nossa referência de diretiva AngularJS .

- Além disso, você pode usar o módulo para adicionar suas próprias diretivas aos seus aplicativos:

<blockquote>

	<div ng-app="myApp" w3-test-directive></div>

	<script>
	var app = angular.module("myApp", []);

	app.directive("w3TestDirective", function() {
	  return {
	    template : "I was made in a directive constructor!"
	  };
	});
	</script>

</blockquote>

### Módulos e controladores em arquivos separados

- É comum em aplicativos AngularJS colocar o módulo e os controladores em arquivos JavaScript.

- Neste exemplo, "myApp.js" contém uma definição de módulo de aplicativo, enquanto "myCtrl.js" contém o controlador: 

<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body>

	<div ng-app="myApp" ng-controller="myCtrl">
	{{ firstName + " " + lastName }}
	</div>

	<script src="myApp.js"></script>
	<script src="myCtrl.js"></script>

	</body>
	</html>

</blockquote>

### Definição vs Recuperação.

- O parâmetro [] na definição do módulo pode ser usado para definir os módulos dependentes.

- Sem o parâmetro [], você não está criando um novo módulo, mas recuperando um existente.

<blockquote>

	var app = angular.module("myApp", []);

</blockquote>

### As funções podem poluir o namespace global

- Funções globais devem ser evitadas em JavaScript. Eles podem ser facilmente substituídos ou destruídos por outros scripts.

- Os módulos AngularJS reduzem esse problema, mantendo todas as funções locais ao módulo.

<blockquote>

	app.controller("myCtrl", function($scope) {
	  $scope.firstName = "John";
	  $scope.lastName= "Doe";
	});

</blockquote>

### Quando carregar a biblioteca

- Embora seja comum em aplicativos HTML colocar scripts no final do <body>elemento, é recomendável carregar a biblioteca AngularJS no <head>arquivo <body>.

- Isso ocorre porque as chamadas para angular.modulesó podem ser compiladas após o carregamento da biblioteca.

<blockquote>

	<!DOCTYPE html>
	<html>
	<body>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

	<div ng-app="myApp" ng-controller="myCtrl">
	{{ firstName + " " + lastName }}
	</div>

	<script>
	var app = angular.module("myApp", []);
	app.controller("myCtrl", function($scope) {
	  $scope.firstName = "John";
	  $scope.lastName = "Doe";
	});
	</script>

	</body>
	</html>

</blockquote>

# Diretivas AngularJS

- Listage de cada diretiva: https://www.w3schools.com/angular/angular_ref_directives.asp

- AngularJS permite estender o HTML com novos atributos chamados Diretivas .

- O AngularJS possui um conjunto de diretivas integradas que oferece funcionalidade para seus aplicativos.

- AngularJS também permite definir suas próprias diretivas.

- As diretivas AngularJS são atributos HTML estendidos com o prefixo ng-.

- A ng-appdiretiva inicializa um aplicativo AngularJS.

- A ng-initdiretiva inicializa os dados do aplicativo.

- A ng-modeldiretiva vincula o valor dos controles HTML (entrada, seleção, área de texto) aos dados do aplicativo.

<blockquote>

	<div ng-app="" ng-init="firstName='John'">

	<p>Name: <input type="text" ng-model="firstName"></p>
	<p>You wrote: {{ firstName }}</p>

	</div>

</blockquote>

- A ng-app diretiva também informa ao AngularJS que o elemento <div> é o "proprietário" do aplicativo AngularJS.

### Ligação de dados

- A {{ firstName }}expressão, no exemplo acima, é uma expressão de ligação de dados AngularJS.

- A vinculação de dados em AngularJS vincula expressões AngularJS com dados AngularJS.

- {{ firstName }}está vinculado com ng-model="firstName".

- No próximo exemplo, dois campos de texto são vinculados com duas diretivas ng-model:

<blockquote>

	<div ng-app="" ng-init="quantity=1;price=5">

	Quantity: <input type="number" ng-model="quantity">
	Costs:    <input type="number" ng-model="price">

	Total in dollar: {{ quantity * price }}

	</div>

</blockquote>

- O uso ng-initnão é muito comum. Você aprenderá como inicializar dados no capítulo sobre controladores.

### Repetindo Elementos HTML

- A ng-repeatdiretiva repete um elemento HTML:

<blockquote>

	<div ng-app="" ng-init="names=['Jani','Hege','Kai']">
	  <ul>
	    <li ng-repeat="x in names">
	      {{ x }}
	    </li>
	  </ul>
	</div>

</blockquote>

- A ng-repeatdiretiva realmente clona elementos HTML uma vez para cada item em uma coleção.

- A ng-repeatdiretiva usada em uma matriz de objetos:

<blockquote>

	<div ng-app="" ng-init="names=[
	{name:'Jani',country:'Norway'},
	{name:'Hege',country:'Sweden'},
	{name:'Kai',country:'Denmark'}]">

	<ul>
	  <li ng-repeat="x in names">
	    {{ x.name + ', ' + x.country }}
	  </li>
	</ul>

	</div>

</blockquote>

### OBS

- A ng-appdiretiva define o elemento raiz de um aplicativo AngularJS.

- A ng-appdiretiva irá auto-bootstrap (inicializar automaticamente) o aplicativo quando uma página da web for carregada.

- Normalmente, você não usará ng-init. Você usará um controlador ou módulo em vez disso.

- A ng-modeldiretiva também pode:

	- Forneça validação de tipo para dados do aplicativo (número, e-mail, obrigatório).
	- Forneça o status dos dados do aplicativo (inválido, sujo, tocado, erro).
	- Fornece classes CSS para elementos HTML.
	- Vincule elementos HTML a formulários HTML.

### Criar novas diretivas

- Além de todas as diretivas internas do AngularJS, você pode criar suas próprias diretivas.

- Novas diretivas são criadas usando a .directivefunção.

- Para invocar a nova diretiva, crie um elemento HTML com o mesmo nome de tag da nova diretiva.

- Ao nomear uma diretiva, você deve usar um nome camel case, w3TestDirective, mas ao invocá-lo, você deve usar -name separado, w3-test-directive:

<blockquote>

	<body ng-app="myApp">

	<w3-test-directive></w3-test-directive>

	<script>
	var app = angular.module("myApp", []);
	app.directive("w3TestDirective", function() {
	  return {
	    template : "<h1>Made by a directive!</h1>"
	  };
	});
	</script>

	</body>

</blockquote>

- Você pode invocar uma diretiva usando:

- Nome do elemento

<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body ng-app="myApp">

	<w3-test-directive></w3-test-directive>

	<script>
	var app = angular.module("myApp", []);
	app.directive("w3TestDirective", function() {
	    return {
	        template : "<h1>Made by a directive!</h1>"
	    };
	});
	</script>

	</body>
	</html>

</blockquote>

- Atributo

<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body ng-app="myApp">

	<div w3-test-directive></div>

	<script>
	var app = angular.module("myApp", []);
	app.directive("w3TestDirective", function() {
	    return {
	        template : "<h1>Made by a directive!</h1>"
	    };
	});
	</script>

	</body>
	</html>

</blockquote>


- Classe

<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body ng-app="myApp">

	<div class="w3-test-directive"></div>

	<script>
	var app = angular.module("myApp", []);
	app.directive("w3TestDirective", function() {
	    return {
	        restrict : "C",
	        template : "<h1>Made by a directive!</h1>"
	    };
	});
	</script>

	<p><strong>Note:</strong> You must add the value "C" to the restrict property to be able to invoke the directive from a class name.</p>

	</body>
	</html>

</blockquote>

- Comente

<blockquote>

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<body ng-app="myApp">

	<!-- directive: w3-test-directive -->

	<script>
	var app = angular.module("myApp", []);
	app.directive("w3TestDirective", function() {
	    return {
	        restrict : "M",
	        replace : true,
	        template : "<h1>Made by a directive!</h1>"
	    };
	});
	</script>

	<p><strong>Note:</strong> We've added the <strong>replace</strong> property in this example, otherwise the comment would be invisible.</p>

	<p><strong>Note:</strong> You must add the value "M" to the <strong>restrict</strong> property to be able to invoke the directive from a comment.</p>

	</body>
	</html>

</blockquote>

### Restrições

- Você pode restringir suas diretivas para serem invocadas apenas por alguns dos métodos.

- Os valores legais restritos são:

	- E para o nome do elemento
	- A para atributo
	- C para classe
	- M para comentário

- Por padrão, o valor é EA, o que significa que tanto os nomes de elementos quanto os nomes de atributos podem invocar a diretiva.

# Diretiva ng-model, Classes CSS! 

- A ng-modeldiretiva fornece classes CSS para elementos HTML, dependendo de seu status:

<blockquote>

	<style>
	input.ng-invalid {
	  background-color: lightblue;
	}
	</style>
	<body>

	<form ng-app="" name="myForm">
	  Enter your name:
	  <input name="myName" ng-model="myText" required>
	</form>

</blockquote>

- A ng-modeldiretiva adiciona/remove as seguintes classes, de acordo com o status do campo do formulário:

	- ng-empty
	- ng-not-empty
	- ng-touched
	- ng-untouched
	- ng-valid
	- ng-invalid
	- ng-dirty
	- ng-pending
	- ng-pristine

# Modelo de dados

<blockquote>

	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
	  $scope.firstname = "John";
	  $scope.lastname = "Doe";
	});

</blockquote>

### Visualização HTML

- O contêiner HTML no qual o aplicativo AngularJS é exibido é chamado de visualização.

- A exibição tem acesso ao modelo e há várias maneiras de exibir os dados do modelo na exibição.

- Você pode usar a ng-binddiretiva, que vinculará o innerHTML do elemento à propriedade de modelo especificada:

<blockquote>

	<p ng-bind="firstname"></p>

</blockquote>

<blockquote>

	<p>First name: {{firstname}}</p>

</blockquote>

- Ou você pode usar a ng-modeldiretiva em controles HTML para vincular o modelo à exibição.

### A ng-modelDiretiva

- Use a ng-modeldiretiva para vincular dados do modelo à exibição em controles HTML (entrada, seleção, área de texto)

<blockquote>

	<div ng-app="myApp" ng-controller="myCtrl">
	  Name: <input ng-model="firstname">
	  <h1>{{firstname}}</h1>
	</div>

	<script>
	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
	  $scope.firstname = "John";
	  $scope.lastname = "Doe";
	});
	</script>

</blockquote>

Controlador AngularJS

- Devido à sincronização imediata do modelo e da visualização, o controlador pode ser completamente separado da visualização e simplesmente se concentrar nos dados do modelo. Graças à vinculação de dados no AngularJS, a visualização refletirá quaisquer alterações feitas no controlador.

<blockquote>

	<div ng-app="myApp" ng-controller="myCtrl">
	  <h1 ng-click="changeName()">{{firstname}}</h1>
	</div>

	<script>
	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
	  $scope.firstname = "John";
	  $scope.changeName = function() {
	    $scope.firstname = "Nelly";
	  }
	});
	</script>


</blockquote>



<blockquote>

</blockquote>








