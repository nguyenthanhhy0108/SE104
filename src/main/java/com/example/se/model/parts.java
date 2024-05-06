package com.example.se.model;

import com.example.se.model.dataDTO.PartDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "PARTS")
public class parts {

    @Id
    @Column(name = "PartID")
    private int partID;

    @Column(name = "PartName")
    private String name;

    @Column(name = "PartPrice")
    private double price;

    public parts() {
    }

    public parts(int partID, String name, double price) {
        this.partID = partID;
        this.name = name;
        this.price = price;
    }

    public PartDTO toDTO() {
        PartDTO partDTO = new PartDTO();
        partDTO.setPartName(this.name);
        partDTO.setPrice(this.price);

        return partDTO;
    }
}
