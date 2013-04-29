<cfsavecontent variable="json">
[
    { "_id" : { "$oid" : "1"} , "name" : "Undeletable" , "site" : "http://how.do.you.delete.this" , "description" : "Not really questioning angularBs in general, but more a mongoLab PESTfull service which is exposed in the client....." , "comment" : "If you read this... you have taken the red pill"} ,
    { "_id" : { "$oid" : "2"} , "name" : "ww" , "site" : "http://333.com" , "description" : "jjjsajdfkjds"} ,
    { "_id" : { "$oid" : "3"} , "name" : "ww" , "site" : "http://333.com" , "description" : "jjjsajdfkjds"} ,
    { "_id" : { "$oid" : "4"} , "name" : "test" , "description" : "something" , "site" : "http://google.com"} ,
    { "_id" : { "$oid" : "5"} , "name" : "son" , "site" : "http://a" , "description" : "son"}
]
</cfsavecontent>

<cfscript>
if (!IsNull(URL.id)){
    result = SerializeJSON(DeSerializeJSON(json)[URL.id]);
}else{
    result = json;
}
</cfscript>

<!--- simulate long server response --->
<cfset sleep(1500)>
<cfsetting showdebugoutput="false">
<cfcontent type="application/json;charset=utf-8" reset="true"><cfoutput>#Trim(result)#</cfoutput>