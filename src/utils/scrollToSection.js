export default function scrollToSectionFunc(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); 
};