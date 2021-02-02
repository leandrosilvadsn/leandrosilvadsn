// Next.js API route support: https://api.hgbrasil.com/weather



async function tempo(request, response) {
    const dynamicDate = new Date();

    const temperaturaResponse = await fetch("https://api.hgbrasil.com/weather");
    const temperaturaJson = await temperaturaResponse.json();
    const temperatura = temperaturaJson.temp;

    response.json({
        date: dynamicDate.toGMTString(),
        temperatura: temperatura
    });



}

export default tempo;
  