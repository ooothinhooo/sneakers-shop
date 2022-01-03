function renderCart(items) {
    const $cart = document.querySelector(".addcart")
    const $total = document.querySelector(".total")
    $cart.innerHTML = items.map((item) => `
   
            <tr>
            
                <td style="font-size: 10px;" >#${item.id}</td>
                <td > <img src="${item.photo}"></td>
                <td style="font-size: 20px;  ">
                <h4> ${item.name}</h4>
               </td>
                <td style="font-size: 20px;">
                <button type="button" class="btn-button cong"
                    onClick="cartLS.quantity(${item.id},1)"><h3>+</h3></button>
                      ${item.quantity}
                <button type="button" class="btn-button cong"
                    onClick="cartLS.quantity(${item.id},-1)"><h3>-</h3></button>
                </td>
                <td>
                    <form action="/action_page.php" class="btn-input">
                    <label for="size">Size:</label>
                    <select name="size" id="size">
                    <option value="volvo">6</option>
                    <option value="saab">7</option>
                    <option value="opel">8</option>
                    <option value="audi">9</option>
                    </select>
                    </form>
                </td>
                <td class="text-right" style="font-size: 20px;">
                <h4>   $${item.price}</h4>
                </td>
                <td class="text-right"><Button class="btn btn-primary" style="font-size: 20px;" onClick="cartLS.remove(${item.id})"><i class='bx bxs-trash'></i></Button></td>
            </tr>
            
            
            `).join("")

    $total.innerHTML = "$" + cartLS.total()
}
renderCart(cartLS.list())
cartLS.onChange(renderCart)

function thanhtoan(){
    alert("Thanh toán thành công");
}