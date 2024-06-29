

document.addEventListener('DOMContentLoaded', function () {
    let addi = document.getElementById("add");
    let box = document.querySelector(".box");

    addi.addEventListener('click', function (event) {
        event.preventDefault();
        let texte = document.getElementById('write').value;

        document.getElementById('write').value = " ";
        var div = document.createElement('div');
        var div2 =  document.createElement('div');
        var check = document.createElement('input');
        check.type = "checkbox";
       
        var dele = document.createElement('span');
        dele.textContent = 'x';
        dele.addEventListener('click',function(){

            div.remove();
        })
        check.addEventListener('change',function(){

         if(check.checked)
           { p.style.textDecoration="line-through";
            p.style.opacity=80 + "%";
            }
        else
        p.style.textDecoration="";
        })

        var p = document.createElement('p');

        p.textContent = texte;
        div2.appendChild(check);
       div2.appendChild(p);
       div.appendChild(div2);
        div.appendChild(dele);
        div.classList.add('task');
        div2.classList.add('part');
       
        box.appendChild(div);
        
    });
});
