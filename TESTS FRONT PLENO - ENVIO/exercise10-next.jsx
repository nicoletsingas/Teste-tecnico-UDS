/**
 * O componente Dashboard possui um layout com muitas divs aninhadas e markup duplicado
 * para montar sessões distintas da tela. Melhore a organização e clareza criando componentes
 * reutilizáveis para cada seção (Summary, Graph, Table) e aplique boas práticas de
 * composição visual.
 * 
 * 
 * 
 * 
 * crio componentes em uma pasta separado e chamo eles dentro desse componente pai dashboard, dessa forma fica melhor reoganizado e facil de entender. também é possivel deixar os valores de cada componente dinamico e alterar cofnorme os dados do componente pai
 * 
 * 
 * 
 */
export default function Dashboard() {

	return (
		<div className='dashaboard'>
			
			<Summary />

			<Graph />

			<Table />
		</div>
	)
}