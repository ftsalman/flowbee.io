export const sendWhatsappTemplate = async (formData) => {
  const API_ENDPOINT = 'https://flowb.io/flowbee/SendWhatsappTemplate';
  const API_KEY = '2736FCA7-9C60-41CF-9813-2BB6DB8B88EF';
  const cleanPhone = formData.phone.replace(/[^0-9]/g, '');

  const customerPayload = {
    company: "",
    phoneno: "919544144369",
    templatE_ID: "1353918876602023",
    section: [{ section: "body", parameter: [{ type: "text", name: "customer_name", value: formData.name }] }],
    to: [{ number: cleanPhone, sessioN_ID: 0, parameter: [{ coL_KEY: "customer_name", coL_VAL: formData.name }] }]
  };

  const adminPayload = {
    company: "",
    phoneno: "919544144369",
    templatE_ID: "1482968393067462",
    section: [{
      section: "body",
      parameter: [
        { type: "text", name: "customer_name", value: formData.name },
        { type: "text", name: "customer_mobile", value: formData.phone },
        { type: "text", name: "customer_email", value: formData.email }
      ]
    }],
    to: [{
      number: "919846287369",
      sessioN_ID: 0,
      parameter: [
        { coL_KEY: "customer_name", coL_VAL: formData.name },
        { coL_KEY: "customer_mobile", coL_VAL: formData.phone },
        { coL_KEY: "customer_email", coL_VAL: formData.email }
      ]
    }]
  };

  const requestOptions = (payload) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY },
    body: JSON.stringify(payload)
  });

  const [customerResponse, adminResponse] = await Promise.all([
    fetch(API_ENDPOINT, requestOptions(customerPayload)),
    fetch(API_ENDPOINT, requestOptions(adminPayload))
  ]);
  
  if (!customerResponse.ok || !adminResponse.ok) {
    throw new Error(`API rejected request.`);
  }

  return { customerResponse, adminResponse };
};
