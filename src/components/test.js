//name이 glenn인 obj객체를 선언하자
var obj = {name:"glenn"};

//this의 name값을 출력하는 bindTest()함수를 선언하자
function bindTest(){
	console.log(this.name);
}

//여기서 bindTest()를 호출하면 어떠한 결과값이 나올까?
//'undefined'라는 값이 호출된다 => 선언된 this가 없으므로

//그렇다면 bind()함수를 사용하여 obj를 넘겨준다면?
var bindTest2 = bindTest.bind(obj);
//bindTest2(); // glenn