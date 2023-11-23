"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface SizesClientProps{
  data: SizeColumn[]
}

export const SizesClient: React.FC<SizesClientProps> = ({
data
}) =>{
    const router = useRouter();
    const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
       <Heading 
       title={`Tamanhos (${data.length})`}
       description="Gerenciamento (Tamanho / Medidas)"
       />
       <Button onClick={()=> router.push(`/${params.storeId}/sizes/new`)}>
        <Plus className="mr-2 h-4 w-4"/>
        Adicionar Novo Tamanho
       </Button>
      </div>
      <Separator/>
      <DataTable searchKey="name" columns={columns} data={data}/>
      <Heading title="Interface De Programação De Aplicativos" description="Lista De Aplicativos"/>

      <Separator/>
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};
