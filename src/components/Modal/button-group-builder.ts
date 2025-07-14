import type { ButtonGroups, ButtonProperties } from "./types";

class ButtonGroupBuilder {
  private buttonGroups: ButtonGroups = new Map();

  addGroup(group: string): ButtonGroupBuilder {
    if (!this.buttonGroups.has(group)) {
      this.buttonGroups.set(group, []);
    }

    return this;
  }

  addButton(
    group: string,
    buttonProperties: ButtonProperties
  ): ButtonGroupBuilder {
    this.addGroup(group);
    if (!buttonProperties.id) {
      buttonProperties.id = `${group}-${buttonProperties.command}`;
      this.buttonGroups.set(group, [
        ...this.buttonGroups.get(group)!,
        buttonProperties,
      ]);
    }

    return this;
  }

  static defaultGroups(): ButtonGroups {
    const groups: ButtonGroups = new Map();

    groups.set("ok", [
      {
        id: "ok-ok",
        text: "Ok",
        command: "ok",
      },
    ]);
    groups.set("cancel", [
      {
        id: "cancel-cancel",
        text: "Cancel",
        command: "cancel",
      },
    ]);

    return groups;
  }
}

export default ButtonGroupBuilder;
