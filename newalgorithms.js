function diffArray(arr1, arr2) {
var indexnone1 = [];
var indexnone2 = [];
for (var i =0; i<arr1.length; i++) {
	var index1 = arr2.indexOf(arr1[i]);
		if (index1 === -1) {
			indexnone1.push(arr1[i]);
	  	} else {
			indexnone2.push(index1);
	  	}
}
for (i=0; i <arr2.length; i++) {
	var index2 = arr1.indexOf(arr2[i]);
    	if (index2 === -1) {
       		indexnone1.push(arr2[i]);
     	} else {
       		indexnone2.push(index2);
   		}
}
  
return indexnone1;

}

diffArray([1,2,3,4,5], [1,2,3,6]);


	/*function getIndex1(item, index) {
		console.log(item + index);
	}


 /*	var indexnone1 = [];
 	var indexnone2 = [];
	for (var i =0; i<arr1.length; i++) {
		var index1 = arr2.indexOf(arr1[i]);
		if (index1 === -1) {
			indexnone1.push(index1);
		} else {
		indexnone2.push(index1);
	}}

	for (var j=0; j<arr2.length; j++) {
		var index2 = arr1.indexOf(arr2[i]);
		indexnone2.push(index2);
	}
*/
	

	// loop through first array
	//find index of each value in 2nd array
	//take those (use filter) that are not indexable and put them in their own array - other array
	//
	//loop through 2nd array
	//find index of value in first array
	//take those that are not indexable and add them to other array
	