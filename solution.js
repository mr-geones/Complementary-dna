function DNAStrand(dna)
{
  let str = dna.toUpperCase();
	let arr = str.split('');
	
	for(let i = 0; i < arr.length; i++)
	{
		if(arr[i] === 'A')
			arr.splice(i, 1, 'T');
		if(arr[i] === 'T')
			arr.splice(i, 1, 'A');
		if(arr[i] === 'C')
			arr.splice(i, 1, 'G');
		if(arr[i] === 'G')
			arr.splice(i, 1, 'C');
	}
	
  return arr.join('');
}
