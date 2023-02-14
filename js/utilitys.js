function getInputFieldById(inputId){
    const getinputId =  document.getElementById(inputId);
    const getinputFieldValueString =getinputId.value ;
    const getinputFieldValue = parseFloat(getinputFieldValueString);
    getinputId.value='';
    return getinputFieldValue;
}

function getTextElementById(elementId){
    const textElement = document.getElementById(elementId);
    const getTextElementValueString = textElement.innerText;
    const getTextElementValue = parseFloat(getTextElementValueString);
    return getTextElementValue;
}

function setElementValue(elementsId, values){
    const textelements = document.getElementById(elementsId);
    textelements.innerText = values;
}
