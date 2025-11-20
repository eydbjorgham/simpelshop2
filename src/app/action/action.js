"use server";
export const submitProduct = async (clearPreviewData, formData) => {
    const error = {

    };
const productName = formData.get("productname");
if(!productName) {
  error.productName = "SKRIV NOGET";
}
else if(productName.length < 5) 
{
error.productName = "Minimum 5 bogstaver";
}

if(Object.keys(error).length > 0){
return {error, productName};
}
return {succes: true};
};





// ! = IKKE (hvis der IKKE er et produktnavn, så...
// ellers hvis der er et produktnavn på UNDER 5 bogstaver, så...)