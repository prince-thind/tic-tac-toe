export default function main(e){
    const cellDiv=e.target;
    const index=cellDiv.getAttribute('data-index');
    console.log(index);
}