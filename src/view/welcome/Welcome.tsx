export const Welcome = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <section className="h-screen flex flex-col flex-center justify-center ">
      <h1 className="text-5xl text-center">Bem vindo ao CS MANAGER -</h1>
      <ol className="text-3xl mx-auto text-left py-8">
        <li>1. Monte seu time -</li>
        <li>2. Bans e Picks dos Mapas</li>
        <li>3. Se divirta </li>
      </ol>
      <input
        placeholder="Qual nome do time ?"
        className="text-primary text-3xl mx-auto w-1/2 text-center h-12 rounded-md"
      />
      <div className="mx-auto mt-8">
        <button
          onClick={nextStep}
          className="btn text-white text-1xl font-thin"
        >
          Montar meu time
        </button>
      </div>
    </section>
  );
};
