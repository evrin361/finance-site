import { NextResponse } from "next/server"
import ExcelJS from "exceljs"
import { supabase } from "@/lib/supabase"

export async function GET() {

  const { data: orders, error } = await supabase
    .from("orders")
    .select("*")

  if (error) {

    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }

  const workbook = new ExcelJS.Workbook()

  const worksheet = workbook.addWorksheet("Orders")

  worksheet.columns = [

    {
      header: "نام",
      key: "full_name",
      width: 30,
    },

    {
      header: "شماره",
      key: "phone",
      width: 20,
    },

    {
      header: "بازار",
      key: "market",
      width: 20,
    },

    {
      header: "پیام",
      key: "message",
      width: 50,
    },

    {
      header: "وضعیت",
      key: "status",
      width: 20,
    },

    {
      header: "تاریخ",
      key: "created_at",
      width: 30,
    },

  ]

  orders.forEach((order) => {

    worksheet.addRow({

      full_name: order.full_name,

      phone: order.phone,

      market: order.market,

      message: order.message,

      status: order.status,

      created_at: order.created_at,

    })

  })

  const buffer = await workbook.xlsx.writeBuffer()

  return new Response(buffer, {

    status: 200,

    headers: {

      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

      "Content-Disposition":
        "attachment; filename=orders.xlsx",

    },

  })

}