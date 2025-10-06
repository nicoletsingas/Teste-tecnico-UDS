/**
 * Criar componente de formulário com validação
 *
 *
 * criei o formulario, porém para fazer a validação precisaria olhar documentação do next, na internet, nao consegui de cabeça
 */

export default function Form() {
  const handleSubmit = () => {
    //validação aqui
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="rounded-md border-2 border-gray-300 p-2"
          type="text"
          id="name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          className="rounded-md border-2 border-gray-300 p-2"
          type="password"
          id="password"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 rounded-md text-white py-2 px-5"
      >
        Login
      </button>
    </form>
  );
}
