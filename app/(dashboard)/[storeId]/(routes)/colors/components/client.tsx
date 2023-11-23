"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ColorColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ColorsClientProps{
  data: ColorColumn[]
}

export const ColorsClient: React.FC<ColorsClientProps> = ({
data
}) =>{
    const router = useRouter();
    const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
       <Heading 
       title={`Cores (${data.length})`}
       description="Gerenciamento (Cores)"
       />
       <Button onClick={()=> router.push(`/${params.storeId}/colors/new`)}>
        <Plus className="mr-2 h-4 w-4"/>
        Adicionar Nova Cor
       </Button>
      </div>
      <Separator/>
      <DataTable searchKey="name" columns={columns} data={data}/>
      <Heading title="Interface De Programação De Aplicativos" description="Lista De Aplicativos"/>

      <Separator/>
      <ApiList entityName="colors" entityIdName="colorId" />
    </>
  );
};
