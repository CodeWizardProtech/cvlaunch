<<<<<<< HEAD
import { formatTailwindHTML } from "@/lib/utils";

import puppeteer from "puppeteer";
import puppeteerCore from "puppeteer-core";
import chromium from "@sparticuz/chromium";
=======
// Configuração para Vercel (plano gratuito)
export const maxDuration = 10;
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
>>>>>>> 72f1b14 (atualizado)

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
<<<<<<< HEAD

    const { html, structure } = body;

    if (!html || !structure) return Response.json(
      { message: "Parâmetros inválidos" },
      { status: 400 }
    );

    let browser = null;

    if (process.env.NODE_ENV === "development") {
      browser = await puppeteer.launch();
    } else {
      browser = await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    }

    const page = await browser.newPage();

    await page.setContent(formatTailwindHTML(html, structure));

    // @ts-expect-error
    const bodyHeight = await page.evaluate(() => {
      return document.body.scrollHeight + 20;
    });

    const pdf = await page.pdf({
      width: "210mm",
      height: `${bodyHeight}px`,
      printBackground: true,
    });

    await browser.close();

    return new Response(pdf, {
      headers: {
        "Content-type": "application/pdf",
      }
    })
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Ocorreu um erro inesperado", error },
      { status: 500 }
    )
  }
}
=======
    const { html } = body;

    if (!html) {
      return Response.json(
        { message: "HTML não fornecido" },
        { status: 400 }
      );
    }

    // Retorna o HTML limpo para processamento no frontend
    return Response.json({ 
      success: true,
      html: html 
    });
    
  } catch (error) {
    console.error("PDF Generation Error:", error);
    
    return Response.json(
      {
        message: "Erro ao processar PDF",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
};
>>>>>>> 72f1b14 (atualizado)
