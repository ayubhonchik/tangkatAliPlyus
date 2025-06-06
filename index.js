const cities = [
      "Ташкент", "Самарканд", "Бухара", "Наманган", "Андижан",
      "Фергана", "Коканд", "Карши", "Термез", "Нукус", "Ургенч", "Хива"
    ];
    const list = document.getElementById("cities-list");
    cities.forEach(city => {
      const li = document.createElement("li");
      li.textContent = city;
      list.appendChild(li);
    });