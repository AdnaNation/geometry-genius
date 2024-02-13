function calculateTriangleArea(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value
    const base = parseFloat(triangleBaseText);
    console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // calculate area
    const area = 0.5 * base * height;
    console.log('area of the triangle is:', area)
      
    // display triangle area
    const triangleAreaInput = document.getElementById('triangle-area');
    triangleAreaInput.innerText = area;



}
function calculateRectangleArea(){
    const rectangleWidthInput = document.getElementById('rectangle-width');
    rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    const rectangleLenghtInput = document.getElementById('rectangle-length');
    const rectangleLenghtText = rectangleLenghtInput.value;
    const length = parseFloat(rectangleLenghtText);
    console.log(length)

    // calculate area
    const area = width * length;
    console.log('area of rectangle is:', area)

    const rectangleareaInput = document.getElementById('rectangle-area');
    rectangleareaInput.innerText = area;

}