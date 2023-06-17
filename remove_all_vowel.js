const str = "zaInaB hAma namdAR";
function  Remove_all_vowels (X)
{
    var str1 = str.toLowerCase();
    var remove_all_vowels= str1.replace(/[aeiou]/g, '') ;
    console.log( remove_all_vowels);
}
Remove_all_vowels(str);