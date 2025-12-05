let product1 = [
            {
                Name: "Peak Kicks", link: "./resources/Gemini_Generated_Image_1qhcdy1qhcdy1qhc.png"
            }, {
                Name: "Peak Air zoom", link: "./resources/Gemini_Generated_Image_4dag8y4dag8y4dag.png"
            },
            {
                Name: "Peak Flex pro", link: "./resources/Gemini_Generated_Image_5h7w7d5h7w7d5h7w.png"
            },
            {
                Name: "Peak high Top", link: "./resources/Gemini_Generated_Image_csuqepcsuqepcsuq.png"
            }
        ]
        let parent1 = document.querySelector('.items');
        for (let i = 0; i < product1.length; i++) {
            let currProduct1 = product1[i];
            parent1.innerHTML += `<div class="shoepic">
                <img src=${currProduct1.link}>
                <p>${currProduct1.Name}</p>
                <a href="/HTML/Structure/product.html" >Shop Now</a>
            </div>`;

        }




        let product2 = [
            {
                Name: "TRAINING T-SHIRT", link: "./resources/Gemini_Generated_Image_xbdes3xbdes3xbde.png", price: "₹899"
            }, {
                Name: "TRAINING JACKET", link: "./resources/Gemini_Generated_Image_nmd1c4nmd1c4nmd1.png", price: "₹1499"
            },
            {
                Name: "TRAINING JOGGERS", link: "./resources/Gemini_Generated_Image_gth96sgth96sgth9.png", price: "₹899"
            },
            {
                Name: "TRAINING TOP", link: "./resources/Gemini_Generated_Image_j2rld3j2rld3j2rl.png", price: "₹899"
            }, {
                Name: "BACKPACK", link: "./resources/Gemini_Generated_Image_agq8pzagq8pzagq8.png", price: "₹899"
            }, {
                Name: "WATER BOTTLE", link: "./resources/Gemini_Generated_Image_qqamxrqqamxrqqam.png", price: "₹1499"
            },
            {
                Name: "TRAINING SHORT", link: "./resources/Gemini_Generated_Image_xxthxsxxthxsxxth.png", price: "₹899"
            },
            {
                Name: "TRAINING HOODIE", link: "./resources/Gemini_Generated_Image_tdytgytdytgytdyt.png", price: "₹899"
            }

        ]
        let parent2 = document.querySelector('.gear-container');
        for (let i = 0; i < product2.length; i++) {
            let currProduct2 = product2[i];
            parent2.innerHTML += `<div class="gear">
                <img src=${currProduct2.link}>
                <h3>${currProduct2.Name}</h3>
                <p>${currProduct2.price}</p>
                <a href="/HTML/Structure/product.html">Shop Now</a>
            </div>`
        }
