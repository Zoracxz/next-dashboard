import { PrismaClient } from "@prisma/client"

export async function GET(request) {
    const prisma = new PrismaClient();

    const clinics = await prisma.outpatient_gp_clinics.findMany();
    let data = JSON.stringify(clinics);
    return new Response(data, {
        status: 200,
    });
}