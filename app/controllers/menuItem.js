


const data = {
	text: "Компания",
	path: "company",
	expanded: true,
	children: [{
		text: "Контрагенты",
		path: "contractor",
		expanded: false,
		children: [{
			path: "individual",
			text: "Физические лица",
			leaf: true
		}, {
			path: "legal",
			text: "Юридические лица",
			leaf: true
		}, {
			path: "businessman",
			text: "Индивидуальные предприниматели",
			leaf: true
		}]
	}, {
		text: "Договора",
		path: "contract",
		
		leaf: true
		/*expanded: false,
		children: [{
			path: "out",
			text: "Исходящие",
			leaf: true
		}, {
			path: "in",
			text: "Входящие",
			leaf: true
		}]*/
		
	}, {
		text: "Платежные поручения",
		path: "payment-order",
		expanded: true,
		leaf: true
	/*}, {
		text: "Факсимильные копии документов",
		path: "faximile",
		expanded: true,
		leaf: true*/
	}, {
		text: "Справочники",
		path: "lookup",
		expanded: false,
		children: [{
			path: "legal-form",
			text: "Организационно-правовые формы",
			leaf: true
		/*}, {
			path: "faximile",
			text: "Факсимиле печатей и подписей",
			leaf: true*/
		}]
	}]
};

function setId(node, pid) {
	node.id = String(Math.random());
	node.pid = pid || null;
	if (node.children) node.children.forEach(item => {
		setId(item, node.id);
	});
}

function toFlat(node, arr) {
	arr.push(node);
	if (node.children) node.children.forEach(item => {
		toFlat(item, arr);
	});
}

setId(data);
const dataArr = [];
toFlat(data, dataArr);
dataArr.forEach(item => {
	if (item.children) delete item.children;
});
// Удаляем рут
let rootNode = dataArr.filter(item => item.pid == null)[0];
dataArr.filter(item => item.pid == rootNode.id).forEach(item => item.pid = "root");


module.exports = {
	
	
	get: (req, res) => {
		
		let pid = req.params.pid || req.query.node;
		
		
		
		/*console.log(dataArr.filter(item => {
			console.log(item, id, item.id == id)
			return item.id == id;
			
		})[0])*/
		
		
		//const rootId = dataArr.filter(item => item.pid == null)[0].id;
		
		
		//pid = pid == "root" ? rootId : pid;
		
		res.send({
			success: true,
			data: dataArr.filter(item => item.pid == pid)
		});

		
		/*if (id == "root") {
			res.send({
				success: true,
				data: dataArr.filter(item => item.id == id)[0]
			});
		} else {
			res.send({
				success: false
			});
		}*/
		

		
	}
	
	
};