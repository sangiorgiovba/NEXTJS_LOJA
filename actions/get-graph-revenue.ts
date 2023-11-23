import prismadb from "@/lib/prismadb";

interface GraphData {
  name: string;
  total: number;
}

export const getGraphRevenue = async (storeId: string): Promise<GraphData[]> => {
  const paidOrders = await prismadb.order.findMany({
    where: {
      storeId,
      isPaid: true,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  const monthlyRevenue: { [key: number]: number } = {};

  
  for (const order of paidOrders) {
    const month = order.createdAt.getMonth(); 
    let revenueForOrder = 0;

    for (const item of order.orderItems) {
      revenueForOrder += item.product.price.toNumber();
    }

    
    monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
  }

  
  const graphData: GraphData[] = [
    { name: "Janeiro", total: 0 },
    { name: "Fevereiro", total: 0 },
    { name: "Marco", total: 0 },
    { name: "Abril", total: 0 },
    { name: "Maio", total: 0 },
    { name: "Junho", total: 0 },
    { name: "Julho", total: 0 },
    { name: "Agosto", total: 0 },
    { name: "Setembro", total: 0 },
    { name: "Outubro", total: 0 },
    { name: "Novembro", total: 0 },
    { name: "Dezembro", total: 0 },
  ];

  
  for (const month in monthlyRevenue) {
    graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
  }

  return graphData;
};