

function photoshow(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(pas => pas.json())
        .then(data => shaowPhoto(data))    
    }
    function shaowPhoto(data){
        const getPhot = document.getElementById('show-photo');
        for(const photo of data){
            console.log(photo);
            const ImgTag = document.createElement('img');
            ImgTag.src = ` ${photo.title}  ${photo.url}  `;
            getPhot.appendChild(ImgTag);

        }
    }