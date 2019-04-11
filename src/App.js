import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 const data=
[{
    "name": "alice",
    "subject": "maths",
    "marks": "79"
},{
    "name": "bob",
    "subject": "maths",
    "marks": "36"
},{
    "name": "clare",
    "subject": "maths",
    "marks": "87"
},{
    "name": "dean",
    "subject": "maths",
    "marks": "50"
},{
    "name": "elon",
    "subject": "maths",
    "marks": "34"
},{
    "name": "fred",
    "subject": "maths",
    "marks": "99"
},{
    "name": "alice",
    "subject": "chemistry",
    "marks": "97"
},{
    "name": "bob",
    "subject": "chemistry",
    "marks": "80"
},{
    "name": "clare",
    "subject": "chemistry",
    "marks": "66"
},{
    "name": "dean",
    "subject": "chemistry",
    "marks": "83"
},{
    "name": "elon",
    "subject": "chemistry",
    "marks": "45"
},{
    "name": "fred",
    "subject": "chemistry",
    "marks": "32"
},{
    "name": "alice",
    "subject": "physics",
    "marks": "32"
},{
    "name": "bob",
    "subject": "physics",
    "marks": "29"
},{
    "name": "clare",
    "subject": "physics",
    "marks": "98"
},{
    "name": "dean",
    "subject": "physics",
    "marks": "56"
},{
    "name": "elon",
    "subject": "physics",
    "marks": "57"
},{
    "name": "fred",
    "subject": "physics",
    "marks": "62"
}];
class App extends Component {
state = {
    math_name: null, 
    chem_name: null,
    phy_name:null , 
    avg: null , 
    sixtyPlus: null ,
    topper:{name:null,marks:null}
  };
  topperMarksFinder  = ()=>
  {   var max={marks: 0, name:null}; var c1=0,c2=0,c3=0,c4=0,c5=0;
     for(let i=0;i<data.length;i++)
    {
         if(data[i].name=='alice') c1+=parseInt(data[i].marks);
         if(data[i].name=='bob')   c2+=parseInt(data[i].marks);
         if(data[i].name=='dean')  c3+=parseInt(data[i].marks);
         if(data[i].name=='elon')  c4+=parseInt(data[i].marks);
         if(data[i].name=='fred')  c5+=parseInt(data[i].marks);
    }
    max.marks=Math.max(c1,c2,c3,c4,c5);
    if( max.marks==c1) max.name='alice';
    if( max.marks==c2) max.name='bob';
    if( max.marks==c3) max.name='dean';
    if( max.marks==c4) max.name='elon';
    if( max.marks==c5) max.name='fred';
      this.setState({topper : max});

  }
  sixtyPlusMarksFinder  = ()=>
  {  let count=0;
     for(let i=0;i<data.length;i++)
    { 
         if(parseInt(data[i].marks)>60) count++;
    }
    this.setState({sixtyPlus : count});
  }
  avgMarksFinder = ()=>
  {
     var total=0;
     for(let i=0;i<data.length;i++)
    { total=total+parseInt(data[i].marks);}
     this.setState({avg : (total/data.length).toFixed(2)});
  }
  highestMarksFinder = ()=>
  {
      var math=0 , chem=0 , phy=0;
      var math_name, chem_name, phy_name;
   for(let i=0;i<data.length;i++)
    { 
          if(data[i].subject=='maths')
           math=Math.max(math , data[i].marks)
         if(data[i].subject=='physics')
           phy=Math.max(phy , data[i].marks)
         if(data[i].subject=='chemistry')
           chem=Math.max(chem , data[i].marks)
           
    }
    for(let i=0;i<data.length;i++){
      if(data[i].subject=='maths'&&data[i].marks==math){
        math_name=data[i].name;
      }
       if(data[i].subject=='physics'&&data[i].marks==phy){
        phy_name=data[i].name;
      }
       if(data[i].subject=='chemistry'&&data[i].marks==chem){
        chem_name=data[i].name;
      }
    }
    this.setState({ math_name, phy_name ,chem_name});
    console.log(math_name+"="+math+" "+ chem_name+"="+chem+" "+phy_name+"="+phy);
  } 
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <input type="button"onClick={this.highestMarksFinder} value="cick me for subject highest name"/>
          <p>Maths : {this.state.math_name}</p>
           <p>physics: {this.state.phy_name}</p>
            <p>chemistry: {this.state.chem_name}</p>
        <input type="button"onClick={this.avgMarksFinder} value="cick me for Average marks"/>
            <p>Average: {this.state.avg}</p>
        <input type="button"onClick={this.sixtyPlusMarksFinder} value="cick me for Average marks"/>
             <p>More than 60 :  {this.state.sixtyPlus}</p>
        <input type="button"onClick={this.topperMarksFinder} value="cick me for Average marks"/>
             <p> Topper Name :{this.state.topper.name}</p><p> Topper Marks :  {this.state.topper.marks}</p>
           
        </header>
      </div>
    );
  }
}

export default App;
