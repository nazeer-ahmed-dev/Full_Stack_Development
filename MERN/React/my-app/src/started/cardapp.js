import React from "react"
const testData = [
{name: "Nazeer", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
{name: "Haseeb", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
{name: "Umair", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

export default class App extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         profi : testData,
    //     };
    // }
    // shorthand 
    state = {
        profi : testData,
    }
    render()
    {
        return (
        <div>
             <div className="header">{this.props.title}</div>
             <Form/>
             <Cardlist prof={this.state.profi}/>

        </div>
        )

    }
}
class Card extends React.Component
{
    render()
    {
        const profile = this.props;
        return (
        <div className="github-profile" style={{margin:'1rem'}}>
            <img src={profile.avatar_url} alt="Foo eating a sandwich." style={{height:'75px' , width:'75px'}}/>
            <div className="info" style={{display:'inline-block',marginLeft:10}}>
                <div className="name" style={{fontSize:'125%',color:Math.random() > 0.5 ? 'green':'reed'}}>{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>

        </div>
        )
    }
}

const Cardlist = (props) =>{
   
   return <div>
       {
           props.prof.map((value)=>{ return <Card {...value}></Card>})
       }
        <Card {...testData[0]} />
        <Card {...testData[1]} />
        <Card {...testData[2]} />
        
    </div>
}
class Form extends React.Component
{
    render()
    {
        return(
            <form action="">
                <input type="text" placeholder="Username"/>
                <button>Add Card</button>
            </form>
        )
    }
}