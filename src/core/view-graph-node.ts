import { GraphNode } from "@/core/graph-node";
import { NodeManager } from "@/core/node-manager";

export interface ViewGraphNodeInputPosition{
  name: string,
  reciverX: number,
  reciverY: number,
}

export class ViewGraphNode extends GraphNode{
  constructor(nodeType: string, nodeManger: NodeManager) {
    super(nodeType, nodeManger);
    const nodeConfig = nodeManger.nodeConfigs[nodeType];
    nodeConfig.paramsDescriptor.forEach((discriptor, index) => {
      this.inputsPositions.push({
        name: discriptor.name,
        reciverX: 0,
        reciverY:index * 15 + 45,
      });
    });
  }

  public inputsPositions: ViewGraphNodeInputPosition[] = [];

  public positionX = 0;
  public positionY = 0;

  public connectReceiverX = 0;
  public connectReceiverY = 10;

  public connectEmitorX = 100;
  public connectEmitorY = 30;

  public toJSON() {
    const data = super.toJSON();
    data.viewData = {
      positionX: this.positionX,
      positionY: this.positionY
    }
    return data;
  }
  

}