/**
 * Melhore o código abaixo
 * 
 * 
 * eu adicionei os buttons dentro de uma div pai, para melhorar o posicionamento delas e semantica e poder estilizar os buttons e deixar lado a lado, utilizando tailwind
 * 
 * 
*/
export default function Page() {
	return (
    <div className="flex gap-2 items-center">
      <button className="rounded-md bg-green-500 px-5 py-2 text-white">
        Salvar
      </button>
      <button className="rounded-md bg-gray-300 px-5 py-2 text-white">
        Cancelar
      </button>
    </div>
  );
}