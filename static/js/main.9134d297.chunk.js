(this["webpackJsonpgoit-react-hw-02-feedback1"]=this["webpackJsonpgoit-react-hw-02-feedback1"]||[]).push([[0],{21:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a,c,o=n(0),s=n.n(o),i=n(9),r=n.n(i),d=(n(21),n(10)),b=n(11),l=n(16),u=n(15),j=n(1),O=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return console.log(o),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Good: ",t]}),Object(j.jsxs)("li",{children:["Neutral: ",n]}),Object(j.jsxs)("li",{children:["Bad: ",a]}),Object(j.jsxs)("li",{children:["Total: ",c]}),Object(j.jsxs)("li",{children:["Positive feedback: ",o,"%"]})]})})},h=n(4),k=n.n(h),p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)("div",{className:k.a.feedbackOptionsContainers,children:t.map((function(e){return Object(j.jsx)("button",{className:k.a.feedbackOptionsBtn,type:"button",onClick:function(){n(e)},children:e},e)}))})},f=n(5),g=n(6),x=g.a.h2(a||(a=Object(f.a)(["\n  margin-bottom: 10px;\n  margin-top: 10px;\n"]))),v=g.a.div(c||(c=Object(f.a)(["\n  padding: 10px;\n"]))),m=function(e){var t=e.title,n=e.children;return Object(j.jsxs)(v,{children:[Object(j.jsx)(x,{children:t}),n]})},F=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})};F.defaultProps={message:"No feedback given"};var P=F,w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countFeedback=function(t){switch(t){case"good":e.setState({good:e.state.good+1});break;case"neutral":e.setState({neutral:e.state.neutral+1});break;case"bad":e.setState({bad:e.state.bad+1})}},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback();return t?(100*e.state.good/t).toFixed(0):0},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{title:"Please leave feedback",children:Object(j.jsx)(p,{options:Object.keys(this.state),onLeaveFeedback:this.countFeedback})}),Object(j.jsx)(m,{title:"Statistics",children:c?Object(j.jsx)(O,{good:t,neutral:n,bad:a,total:c,positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(P,{message:"No feedback given"})})]})}}]),n}(o.Component);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={feedbackOptionsContainers:"FeedbackOptions_feedbackOptionsContainers__3mNEQ",feedbackOptionsBtn:"FeedbackOptions_feedbackOptionsBtn__3d576"}}},[[25,1,2]]]);
//# sourceMappingURL=main.9134d297.chunk.js.map