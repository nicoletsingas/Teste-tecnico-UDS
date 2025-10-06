/**
 * A página está sempre em branco
 * 
 * 
 * funções async sempre precisam ter um await, então adicionei await na chamada do fetch e esta eu adicionei dentro de uma variavel para poder retornar seu valor.
 * 
 */
export async function getServerSideProps() {
	const retornarDados = await fetch('https://jsonplaceholder.typicode.com/posts');


	return retornarDados;
}