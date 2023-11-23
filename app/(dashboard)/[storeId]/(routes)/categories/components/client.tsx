"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface CategoryClientProps{
  data: CategoryColumn[]
}

export const CategoryClient: React.FC<CategoryClientProps> = ({
data
}) =>{
    const router = useRouter();
    const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
       <Heading 
       title={`Categorias (${data.length})`}
       description="Gerenciamento ( Categorias )"
       />
       <Button onClick={()=> router.push(`/${params.storeId}/categories/new`)}>
        <Plus className="mr-2 h-4 w-4"/>
        Adicionar Novo Categoria
       </Button>
      </div>
      <Separator/>
      <DataTable searchKey="name" columns={columns} data={data}/>
      <Heading title="Interface De Programação De Aplicativos" description="Lista De Categorias"/>

      <Separator/>
      <ApiList entityName="categories" entityIdName="categoriesId" />
    </>
  );
};
