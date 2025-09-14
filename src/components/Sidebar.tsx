import { Link } from "react-router-dom";
import { Package2, Home, Package, ShoppingCart, Receipt, CreditCard, Truck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Inventário Multi-Lojas</span>
        </Link>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Painel</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Painel</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/inventory"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <Package className="h-5 w-5" />
              <span className="sr-only">Estoque</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Estoque</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/sale"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Realizar Venda</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Realizar Venda</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/orders-approve"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <Receipt className="h-5 w-5" />
              <span className="sr-only">Aprovar Pedidos</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Aprovar Pedidos</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/receivables"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <CreditCard className="h-5 w-5" />
              <span className="sr-only">Contas a Receber</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Contas a Receber</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/purchases"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <Truck className="h-5 w-5" />
              <span className="sr-only">Compras</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Compras</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/payables"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <CreditCard className="h-5 w-5" />
              <span className="sr-only">Contas a Pagar</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Contas a Pagar</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              to="/store-portal"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <Store className="h-5 w-5" />
              <span className="sr-only">Portal da Loja</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Portal da Loja</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default Sidebar;