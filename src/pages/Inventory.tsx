import { MadeWithDyad } from "@/components/made-with-dyad";

const Inventory = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Estoque</h1>
        <p className="text-xl text-gray-600">Gerencie seus itens de inventário aqui.</p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Inventory;