  function showDiv(s) {

            const cards = document.querySelectorAll(".cardAc")
            const allView = document.getElementsByClassName("view")
            const open = s.querySelector(".cardAc")
            const view = s.querySelector("div:nth-of-type(1)>span.view")

            let wasOpen = open.classList.contains("max-h-[1000px]");

            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove("max-h-[1000px]");
                cards[i].classList.add("max-h-0");
                allView[i].innerText = "Show"
            }

            if (!wasOpen) {
                open.classList.remove("max-h-0");
                open.classList.add("max-h-[1000px]");
                view.innerText = "Hide"
            }
        }