import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Dimmer, Loader } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [prod, setProduct] = useState({});

  useEffect(() => {
    const productService = new ProductService();
    const load= async()=>{
      const result = await productService.getByProductId(id);
      setProduct(result.data.data);
      setIsLoading(false);}
      load();
  }, [id]);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          {isLoading?(<Dimmer active inverted> <Loader inverted/></Dimmer>):(<Card.Content>
            <Card.Header>{prod.productName}</Card.Header>
            <Card.Meta>{prod.category.categoryName}</Card.Meta>

            <Card.Description>
              {prod.quantityPerUnit}
            </Card.Description>
          </Card.Content>)}
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Sepete Ekle
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
