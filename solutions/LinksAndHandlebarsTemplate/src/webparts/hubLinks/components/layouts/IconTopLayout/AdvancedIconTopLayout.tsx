import * as React from 'react';
import { IHubLinksItem } from '../../IHubLinksItem';
import { IHubLinksLayout } from '../HubLinksLayout';
import HubLinksWebPart from "../../HubLinks";
import styles from '../ItemLayout/ILStyles.module.scss';

export default class AdvancedItemLayoutLayout implements IHubLinksLayout{
  constructor(webpart:HubLinksWebPart){
    this.webpart = webpart;
  }
  
  private _webpart : HubLinksWebPart;
  public get webpart() : HubLinksWebPart {
    return this._webpart;
  }
  public set webpart(v : HubLinksWebPart) {
    this._webpart = v;
  }

  public render(items:IHubLinksItem[], isEditMode:boolean):JSX.Element{
    return (
      <ul className={styles["hubLinks"] + " " + styles["themed"] + (this.webpart.props.isEdit? " " + styles["edit"] : "")}>
        {items &&
            items.map((item) => {
              return (
                <li>
                  <i className={"fa " + item.Icon + " " + styles["faIcon"]} aria-hidden="true"/>
                  {item.NewTab &&
                    <a className={styles["linktitle"]} href={item.URL} target="blank" data-interception="off">{item.Title}</a>
                  }
                  {!item.NewTab &&
                    <a className={styles["linktitle"]} href={item.URL}>{item.Title}</a>
                  }
                  <p className={styles["linkdescription"]}>{item.Description}</p>                    
                </li>                  
              );
            })
          }
          { !items && isEditMode &&
            <div>Please configure the list mapping in the property pane of this web part.</div>
          }      
      </ul>
    );
  }
}