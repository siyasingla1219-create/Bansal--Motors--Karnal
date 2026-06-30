const employees = [


    ...Array(13).fill({department:"Accounts Department"}),


    ...Array(25).fill({department:"Service Department"}),


    ...Array(7).fill({ department:"Backend Team Staff"}),


    ...Array(3).fill({ department: "Store Service Department"}),


    ...Array(3).fill({department: "Driver"}),


    ...Array(4).fill({department: "housekeeper"}),


    ...Array(15).fill({department: "Accidental Staff"}),


    ...Array(5).fill({ department: "New Vehicle Pre Delievery Inspection Department"}),


    ...Array(3).fill({ department: "Breakdown Department"}),


    ];



const depCount = employees.reduce((acc, emp) => {
    acc[emp.department] = (acc[emp.department] || 0) + 1;
    return acc;
}, {});



document.getElementById('totalCount').textContent = employees.length;



const deptGrid = document.getElementById('deptGrid')
deptGrid.innerHTML = '';
Object.enteries(depCount).forEach(([deptGrid, count]) => {
    deptGrid.innerHTML +=
    <div class="dept-Card">
        <h3>${dept}</h3>
        <p class="count">${count}</p>
        <p class="label">Members</p>
    </div>
    ;
});
 