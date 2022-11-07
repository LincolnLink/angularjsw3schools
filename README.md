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














