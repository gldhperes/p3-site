export default function scrollToSectionFunc(id) {
    console.log("scrollToSectionFunc", id);
    
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); 
};