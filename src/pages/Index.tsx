import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Gestão Geral</h1>
        <p className="text-xl text-gray-600">Visão geral do seu inventário multi-lojas.</p>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;